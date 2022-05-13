import React from 'react';

function Home({data}) {
    return (
        <>
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            {data.map((d, i) => {
                return(
                        
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                            </tr>
                        
                )
            })}
            </table>
        </>
    );
}

export default Home;