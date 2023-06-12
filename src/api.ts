
export const getDollarPrices = async () => {
  const nombresPermitidos = ["Oficial", "Blue", "Bolsa", "Turista"];
  try {
    const response = await fetch(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    const data = await response.json();
    const dollarPrices = data
      .map((item: any) => {
        const { venta, nombre } = item.casa;

        const nombreSinDolar = nombre.replace("Dolar", "").trim();

        return { venta, nombre: nombreSinDolar.charAt(0).toUpperCase() + nombreSinDolar.slice(1) };
      })
      .filter((casa: any) => nombresPermitidos.includes(casa.nombre));
    return dollarPrices;
  } catch (error) {
    console.error("Error al obtener el valor del dólar:", error);
  }
}