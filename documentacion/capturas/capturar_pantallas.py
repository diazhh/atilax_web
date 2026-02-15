#!/usr/bin/env python3
"""
Script para capturar pantallas del sistema Atilax en ThingsBoard.
Usa Selenium para automatizar el browser y guardar screenshots como PNG.

Requisitos:
    pip install selenium

Uso:
    python capturar_pantallas.py
"""

import os
import time
import urllib.parse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

# === CONFIGURACIÓN ===
TB_URL = "http://144.126.150.120:8080"
TB_USER = "well@atilax.io"
TB_PASS = "10203040"

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DASHBOARDS = {
    "monitoreo": "38505670-0824-11f1-9173-f191cb13c4bf",
    "optimizacion": "f9343110-0827-11f1-9173-f191cb13c4bf",
    "administracion": "0cbe2ce0-0828-11f1-9173-f191cb13c4bf",
}

# Pozos de ejemplo para detalle (uno de cada tipo)
SAMPLE_WELLS = {
    "esp": {"name": "CA-MAC-BOS-01-005", "state": "detalle_esp"},
    "srp": {"name": "CA-MAC-BOS-01-001", "state": "detalle_srp"},
    "pcp": {"name": "CA-MAC-NEG-01-001", "state": "detalle_pcp"},
    "gaslift": {"name": "CA-MAC-BOS-01-002", "state": "detalle_gaslift"},
}

# Tiempos de espera (segundos)
WAIT_LOGIN = 5
WAIT_DASHBOARD_LOAD = 20       # Dashboards con widgets custom Angular
WAIT_DASHBOARD_SIMPLE = 10     # Dashboards stock / páginas simples
WAIT_AFTER_CLICK = 8           # Después de click en filtro o tarjeta
WAIT_DETAIL_LOAD = 15          # Estado de detalle de pozo
WAIT_SCROLL = 3                # Después de scroll


def setup_driver():
    """Configura Chrome en modo headless con tamaño Full HD."""
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--window-size=1920,1080")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--force-device-scale-factor=1")
    options.add_argument("--disable-gpu")
    driver = webdriver.Chrome(options=options)
    driver.implicitly_wait(5)
    return driver


def wait_for_data(driver, marker_text=None, timeout=35):
    """
    Espera a que los widgets tengan datos reales cargados.
    Usa marker_text para buscar texto específico que indica datos listos.
    Si no se proporciona marker_text, busca indicadores genéricos de datos.
    """
    print(f"   ⏳ Esperando datos (max {timeout}s)...")
    start = time.time()

    # Espera mínima para que Angular inicie y haga las llamadas REST
    time.sleep(8)

    for _ in range(timeout - 8):
        elapsed = time.time() - start
        if elapsed >= timeout:
            break

        try:
            if marker_text:
                # Buscar texto específico que indica datos cargados
                elements = driver.find_elements(By.XPATH,
                    f"//*[contains(text(),'{marker_text}')]"
                )
                if elements:
                    print(f"   ✅ Datos cargados en {elapsed:.1f}s (encontrado '{marker_text}')")
                    time.sleep(3)
                    return True
            else:
                # Buscar indicadores genéricos de datos cargados:
                # - Números con BPD
                # - Nombres de pozos CA-MAC-
                # - Canvas con contenido (ECharts renderizado)
                page_text = driver.find_element(By.TAG_NAME, "body").text

                has_data = (
                    "BPD" in page_text or
                    "CA-MAC-" in page_text or
                    "Hz" in page_text or
                    "PSI" in page_text
                )

                # Verificar que no hay "Cargando" visible
                loading = (
                    "Cargando" in page_text or
                    "Loading" in page_text
                )

                if has_data and not loading:
                    print(f"   ✅ Datos cargados en {elapsed:.1f}s")
                    time.sleep(3)
                    return True

        except Exception:
            pass

        time.sleep(1)

    elapsed = time.time() - start
    print(f"   ⚠️ Timeout después de {elapsed:.1f}s — capturando de todas formas")
    # Esperar un poco más por si acaso
    time.sleep(3)
    return False


def login(driver):
    """Hace login en ThingsBoard."""
    print("🔐 Haciendo login...")
    driver.get(f"{TB_URL}/login")
    time.sleep(WAIT_LOGIN)

    email_input = driver.find_element(By.CSS_SELECTOR, "input[type='email']")
    email_input.clear()
    email_input.send_keys(TB_USER)

    pass_input = driver.find_element(By.CSS_SELECTOR, "input[type='password']")
    pass_input.clear()
    pass_input.send_keys(TB_PASS)

    submit_btn = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    submit_btn.click()

    time.sleep(WAIT_LOGIN)
    print(f"   Logueado. URL actual: {driver.current_url}")


def save_screenshot(driver, folder, filename):
    """Guarda screenshot en la carpeta especificada."""
    path = os.path.join(BASE_DIR, folder)
    os.makedirs(path, exist_ok=True)
    filepath = os.path.join(path, filename)
    driver.save_screenshot(filepath)
    size_kb = os.path.getsize(filepath) / 1024
    print(f"   📸 Guardado: {folder}/{filename} ({size_kb:.0f} KB)")
    return filepath


def capture_login(driver):
    """Captura pantalla de login."""
    print("\n📷 Capturando login...")
    driver.get(f"{TB_URL}/login")
    time.sleep(WAIT_LOGIN)
    save_screenshot(driver, "general", "01_login_atilax.png")


def capture_monitoreo(driver):
    """Captura dashboard de monitoreo (mosaico principal)."""
    print("\n📷 Capturando Monitoreo (Mosaico)...")
    driver.get(f"{TB_URL}/dashboard/{DASHBOARDS['monitoreo']}")
    # Esperar a que aparezcan nombres de pozos (indica mosaico cargado)
    wait_for_data(driver, marker_text="CA-MAC-", timeout=40)
    save_screenshot(driver, "monitoreo", "01_monitoreo_mosaico_63_pozos.png")

    # Scroll down para ver más pozos
    driver.execute_script("window.scrollTo(0, 400)")
    time.sleep(WAIT_SCROLL)
    save_screenshot(driver, "monitoreo", "02_monitoreo_mosaico_scroll.png")
    driver.execute_script("window.scrollTo(0, 0)")


def capture_monitoreo_filtros(driver):
    """Captura mosaico con filtros por tipo de levantamiento."""
    print("\n📷 Capturando filtros por tipo...")
    base_url = f"{TB_URL}/dashboard/{DASHBOARDS['monitoreo']}"

    # Filtrar por ESP
    driver.get(base_url)
    wait_for_data(driver, marker_text="CA-MAC-", timeout=35)
    try:
        buttons = driver.find_elements(By.XPATH,
            "//span[contains(text(),'ESP')]/ancestor::button | "
            "//div[contains(text(),'ESP')] | "
            "//mat-button-toggle//span[contains(text(),'ESP')]/.."
        )
        for btn in buttons:
            if btn.text.strip() == "ESP":
                btn.click()
                time.sleep(WAIT_AFTER_CLICK)
                save_screenshot(driver, "monitoreo", "03_monitoreo_filtro_esp.png")
                break
    except Exception as e:
        print(f"   ⚠️ No se pudo filtrar ESP: {e}")

    # Filtrar por PCP
    driver.get(base_url)
    wait_for_data(driver, marker_text="CA-MAC-", timeout=35)
    try:
        buttons = driver.find_elements(By.XPATH,
            "//span[contains(text(),'PCP')]/ancestor::button | "
            "//div[contains(text(),'PCP')] | "
            "//mat-button-toggle//span[contains(text(),'PCP')]/.."
        )
        for btn in buttons:
            if btn.text.strip() == "PCP":
                btn.click()
                time.sleep(WAIT_AFTER_CLICK)
                save_screenshot(driver, "monitoreo", "04_monitoreo_filtro_pcp.png")
                break
    except Exception as e:
        print(f"   ⚠️ No se pudo filtrar PCP: {e}")


def get_well_asset_id(driver, well_name):
    """Obtiene el asset ID de un pozo via la REST API de ThingsBoard."""
    try:
        asset_id = driver.execute_async_script(f"""
        var callback = arguments[arguments.length - 1];
        var token = localStorage.getItem('jwt_token') || sessionStorage.getItem('jwt_token') || '';
        // TB guarda el JWT como string crudo (no JSON-encoded)
        if (token.startsWith('"')) token = token.slice(1, -1);
        fetch('/api/tenant/assets?pageSize=1&page=0&textSearch={well_name}', {{
            headers: {{'X-Authorization': 'Bearer ' + token}}
        }})
        .then(function(r) {{ return r.json(); }})
        .then(function(d) {{
            if (d.data && d.data.length > 0) callback(d.data[0].id.id);
            else callback(null);
        }})
        .catch(function(e) {{ callback(null); }});
        """)
        return asset_id
    except Exception as e:
        print(f"   ⚠️ No se pudo obtener asset ID para {well_name}: {e}")
        return None


def capture_well_detail(driver, lift_type, well_info):
    """Captura detalle de un pozo haciendo click en la tarjeta del mosaico."""
    print(f"\n📷 Capturando detalle {lift_type.upper()} ({well_info['name']})...")

    base_url = f"{TB_URL}/dashboard/{DASHBOARDS['monitoreo']}"
    driver.get(base_url)
    wait_for_data(driver, marker_text="CA-MAC-", timeout=40)

    try:
        # Buscar el elemento con el nombre del pozo y hacer click via JavaScript
        # para asegurar que el evento se propaga correctamente
        clicked = driver.execute_script(f"""
        var elements = document.querySelectorAll('*');
        for (var i = 0; i < elements.length; i++) {{
            var el = elements[i];
            if (el.textContent.trim() === '{well_info["name"]}' &&
                el.children.length === 0) {{
                // Click en el elemento y propagar el evento
                el.click();
                return 'clicked: ' + el.tagName;
            }}
        }}
        // Fallback: buscar elemento que contiene el nombre
        for (var i = 0; i < elements.length; i++) {{
            var el = elements[i];
            if (el.textContent.includes('{well_info["name"]}') &&
                el.children.length <= 2 &&
                el.offsetWidth > 0) {{
                el.click();
                return 'fallback clicked: ' + el.tagName;
            }}
        }}
        return 'not found';
        """)
        print(f"   Click resultado: {clicked}")

        # Esperar a que cambie el estado — buscar "Volver" (botón de back)
        # o el nombre del pozo en el breadcrumb del header
        time.sleep(3)
        wait_for_data(driver, marker_text="Volver", timeout=25)

    except Exception as e:
        print(f"   ⚠️ Click falló: {e}")

    # Verificar si estamos en el detalle (buscar botones de subsistema como Termico, Vibracion)
    page_text = driver.find_element(By.TAG_NAME, "body").text
    in_detail = "Volver" in page_text or "Termico" in page_text or "Vibracion" in page_text

    if in_detail:
        print(f"   ✅ En estado de detalle")
    else:
        print(f"   ⚠️ No se detectó navegación al detalle — capturando mosaico")

    save_screenshot(driver, "monitoreo", f"05_detalle_{lift_type}_kpis.png")

    # Scroll down para ver gráfico de tendencia
    driver.execute_script("window.scrollTo(0, 300)")
    time.sleep(WAIT_SCROLL + 3)
    save_screenshot(driver, "monitoreo", f"06_detalle_{lift_type}_tendencia.png")


def capture_optimizacion(driver):
    """Captura dashboard de optimización."""
    print("\n📷 Capturando Optimización...")
    driver.get(f"{TB_URL}/dashboard/{DASHBOARDS['optimizacion']}")
    # Esperar a que el waterfall o ranking tengan datos (BPD indica datos cargados)
    wait_for_data(driver, marker_text="BPD", timeout=45)
    save_screenshot(driver, "optimizacion", "01_optimizacion_waterfall.png")

    # Scroll para ver ranking y scatter
    driver.execute_script("window.scrollTo(0, 500)")
    time.sleep(WAIT_SCROLL + 2)
    save_screenshot(driver, "optimizacion", "02_optimizacion_ranking_scatter.png")

    # Más scroll
    driver.execute_script("window.scrollTo(0, 1000)")
    time.sleep(WAIT_SCROLL + 2)
    save_screenshot(driver, "optimizacion", "03_optimizacion_detalle_ranking.png")


def capture_administracion(driver):
    """Captura dashboard de administración."""
    print("\n📷 Capturando Administración...")
    driver.get(f"{TB_URL}/dashboard/{DASHBOARDS['administracion']}")
    # Esperar a que la tabla cargue (nombres de pozos)
    wait_for_data(driver, marker_text="CA-MAC-", timeout=35)
    save_screenshot(driver, "general", "02_administracion_tabla_pozos.png")


def capture_assets_page(driver):
    """Captura la página de activos (lista de pozos en TB)."""
    print("\n📷 Capturando página de Activos...")
    driver.get(f"{TB_URL}/assets")
    time.sleep(WAIT_DASHBOARD_SIMPLE)
    save_screenshot(driver, "general", "03_thingsboard_activos.png")


def capture_dashboards_list(driver):
    """Captura la lista de dashboards."""
    print("\n📷 Capturando lista de Dashboards...")
    driver.get(f"{TB_URL}/dashboards")
    time.sleep(WAIT_DASHBOARD_SIMPLE)
    save_screenshot(driver, "general", "04_thingsboard_dashboards.png")


def main():
    print("=" * 60)
    print("  ATILAX — Captura Automática de Pantallas")
    print("=" * 60)
    print(f"  Servidor: {TB_URL}")
    print(f"  Destino:  {BASE_DIR}")
    print("=" * 60)

    driver = setup_driver()

    try:
        # 1. Login screen
        capture_login(driver)

        # 2. Login
        login(driver)

        # 3. Monitoreo - mosaico principal
        capture_monitoreo(driver)

        # 4. Monitoreo - filtros
        capture_monitoreo_filtros(driver)

        # 5. Detalle de pozo ESP
        capture_well_detail(driver, "esp", SAMPLE_WELLS["esp"])

        # 6. Detalle de pozo SRP
        capture_well_detail(driver, "srp", SAMPLE_WELLS["srp"])

        # 7. Optimización
        capture_optimizacion(driver)

        # 8. Administración
        capture_administracion(driver)

        # 9. Páginas de ThingsBoard
        capture_assets_page(driver)
        capture_dashboards_list(driver)

        print("\n" + "=" * 60)
        print("  ✅ CAPTURAS COMPLETADAS")
        print("=" * 60)

        # Listar archivos generados
        total = 0
        for folder in ["monitoreo", "optimizacion", "general"]:
            folder_path = os.path.join(BASE_DIR, folder)
            if os.path.exists(folder_path):
                files = [f for f in os.listdir(folder_path) if f.endswith(".png")]
                for f in sorted(files):
                    size = os.path.getsize(os.path.join(folder_path, f)) / 1024
                    print(f"  {folder}/{f} ({size:.0f} KB)")
                    total += 1
        print(f"\n  Total: {total} capturas guardadas")

    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
    finally:
        driver.quit()
        print("\n🏁 Browser cerrado.")


if __name__ == "__main__":
    main()
