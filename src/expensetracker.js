import { useState } from "react";

const ExpenseTracker = () => {
    const [count, setCount] = useState(0);

  console.log(count);
  const [formData, setFormData] = useState({
    name: "",
    value: "",
  });
  const [tableData, setTableData] = useState([]);

  function handleChange(e) {
    console.log("e", e.target);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("e formData", e);
    console.log("formData", formData);
    setTableData([...tableData, formData]);
    setFormData({
      name: "",
      value: "",
    });
  }
  Array.prototype.myReduce = function(cf,iv) {
    let acc=iv;
    for(let i=0;i<this.length;i++){
        acc= cf(acc,this[i])
    }
    return acc
  }
  const totalExpense = tableData.myReduce((total, formData) => total + parseInt(formData.value), 0);
  console.log("tableData", tableData);
  return (
    <>
      <form onSubmit={(e) => {
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
        console.log(count,'dsdss')
        return handleSubmit(e)}}>
        <div>
          <label>Expense Name:</label>
          <input
            onChange={(e) => handleChange(e)}
            name="name"
            type="text"
            value={formData.name}
            placeholder="Enter Expense Name"
          />
        </div>
        <div>
          <label>Expense Value:</label>
          <input
            name="value"
            value={formData.value}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Enter Expense Value"
          />
        </div>
        <button>Submit</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Expense Value</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <span>totalExpense : {totalExpense}</span>
    </>
  );
};
export default ExpenseTracker;
