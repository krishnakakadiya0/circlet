import React, { useState } from 'react';
import CourseProps from './CourseProps';

function BranchProps(props) {

    const [branch, setBranch] = useState('Rw1');
    
    const branchRw1 = () => {
        setBranch('Rw1');
    }
    const branchRw2 = () => {
        setBranch('Rw2');
    }
    const branchRw3 = () => {
        setBranch('Rw3');
    }
    const branchRw4 = () => {
        setBranch('Rw4');
    }
    const branchRw5 = () => {
        setBranch('Rw5');
    }
    return (
        <div>
            <div>Branch Name : {branch}</div>
            <CourseProps changeCourse = {branch} /> 
            <button onClick={() => branchRw1()}>Rw1</button>
            <button onClick={() => branchRw2()}>Rw2</button>
            <button onClick={() => branchRw3()}>Rw3</button>
            <button onClick={() => branchRw4()}>Rw4</button>
            <button onClick={() => branchRw5()}>Rw5</button>
        </div>
    );
}

export default BranchProps;