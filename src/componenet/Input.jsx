import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Data = () => {
    const [data, setData] = useState({fn:"" , sn:"" , res:""}); 

    const updateData = (evt) => {
        setData({ ...data, [evt.target.name]: evt.target.value} )
    }

    const handleOperation = (evt) => {
        const operator = evt.target.value;
        const num1 = parseFloat(data.fn);
        const num2 = parseFloat(data.sn);
        let result = 0;

        if(operator === "+") {
           result = num1 + num2
        } else if(operator === "-") {
            result = num1 - num2
        }else if(operator === "*") {
            result = num1 * num2
        }else if(operator === "/") {
            result = num1 / num2
        }
        setData({...data, res: result});
    }   
    console.log(data)

    return (
        <div>
            <label>First</label>
            <input style={styles.input} value={data.fn} onChange={updateData} name="fn" className="px-5" />
            <br />

            <label>Second</label>
            <input style={styles.input} value={data.sn} onChange={updateData} name="sn"/>
            <br />

            <label>Result</label>
            <input style={styles.input} value={data.res} readOnly />
            <br />
           
            <input type="button" value="+" onClick={handleOperation} style={styles.button} />
            <input type="button" value="-" onClick={handleOperation} style={styles.button} />
            <input type="button" value="*" onClick={handleOperation} style={styles.button} />
            <input type="button" value="/" onClick={handleOperation} style={styles.button} />
            
        </div>
    );
};

const styles = {
    input: { color: "#000", border: "1px solid #000", marginLeft: "20px" },
    button: { marginRight: "10px", color: "#000" },
};

export default Data;
