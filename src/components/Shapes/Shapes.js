import React from 'react';

function Shapes({ shapes, operation }) {
    const handleChange = (e) => {
        const value = e.target.value;
        operation(value);
    };

    return (
        <div>
            Select Shape 
            <select onChange={handleChange}>
                {shapes.map((shape, index) => (
                    <option key={index} value={index}>
                        Shape {index}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Shapes;
