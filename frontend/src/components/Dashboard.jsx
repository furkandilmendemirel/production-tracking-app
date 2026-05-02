function Dashboard({ fabrics }) {
  const totalFabric = fabrics.length;
  const totalStock = fabrics.reduce((total, fabric) => total + fabric.quantity, 0);
  const pending = fabrics.filter((fabric) => fabric.status === "Pending").length;
  const processing = fabrics.filter((fabric) => fabric.status === "Processing").length;
  const qualityCheck = fabrics.filter((fabric) => fabric.status === "Quality Check").length;
  const completed = fabrics.filter((fabric) => fabric.status === "Completed").length;

  return (
    <section className="dashboard">
      <div className="card">
        <h3>Total Fabric Rolls</h3>
        <p>{totalFabric}</p>
      </div>

      <div className="card">
        <h3>Total Stock</h3>
        <p>{totalStock} m</p>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>

      <div className="card">
        <h3>Processing</h3>
        <p>{processing}</p>
      </div>

      <div className="card">
        <h3>Quality Check</h3>
        <p>{qualityCheck}</p>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>
    </section>
  );
}

export default Dashboard;
