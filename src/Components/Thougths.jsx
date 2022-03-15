import React from 'react'


const Thougths = (props) => {   
    const selectShortlistedApplicant = (e) => {
        const checked = e.target.checked;
        const tID = e.target.getAttribute("aria-describedby");
        const tList = document.getElementById(tID);
        if (checked){
            tList.children.item(0).style.textDecoration = 'line-through'
            tList.children.item(0).style.backgroundColor = 'beige'
            tList.children.item(1).style.textDecoration = 'line-through'
            tList.children.item(1).style.backgroundColor = 'beige'
            tList.children.item(2).style.textDecoration = 'line-through'
            tList.children.item(2).style.backgroundColor = 'beige'
        } else {
            tList.children.item(0).style.textDecoration = 'none'
            tList.children.item(0).style.backgroundColor = 'transparent'
            tList.children.item(1).style.textDecoration = 'none'
            tList.children.item(1).style.backgroundColor = 'transparent'
            tList.children.item(2).style.textDecoration = 'none'
            tList.children.item(2).style.backgroundColor = 'transparent'
        }
      };

      const removeThought = (e) => {
        const tID = e.target.getAttribute("aria-describedby");
        const tr = document.getElementById(tID);
        const chk = JSON.parse( localStorage.getItem("Journal"));
         console.log(chk);
        const fJ = chk.filter(f=>f["id"]!=tID )
        localStorage.setItem('Journal',JSON.stringify(fJ))
        tr.remove();
      };

    return (
    <div className='tableContainer'>
        <table className='table table-bordered table-striped'>
                <tr>
                    <th>Date</th>
                    <th>Thoughts for the Day</th>
                    <th>Task for the Day</th>
                    <th>Mark as Done</th>

                </tr>
                {props.arr.map((items) => {
                    return (
                        <tr id={items.id} key={items.id}>
                            <td >{items.date}</td>
                            <td >{(items.thoughts == "") ?  "None" : (items.thoughts)  }</td>
                            <td >{(items.task == "") ?  "None" : (items.task)  }</td>
                            <td><input type="checkbox" aria-describedby={items.id} onClick={(e) => {selectShortlistedApplicant(e)}}/>
                                <i onClick={(e) => {removeThought(e)}} aria-describedby={items.id} className="bi bi-trash" ></i> </td>
                        </tr>
                    )
                })}
        </table>
    </div>
  )
}

export default Thougths