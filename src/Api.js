import React, { Component } from 'react';

class App extends Component {
    state = {
        data: []
    };
    
    componentDidMount() {
    //   const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";

  const url =  "https://ymlvpg7jkl.execute-api.us-east-1.amazonaws.com/dev/hospital/hospitalMaster/";
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

/*
    render() {
        const { data } = this.state;


        const result = data.map((entry, index) => {
            console.log(entry);
            return <li key={index}>{entry}</li>;
        });

        return <div className="container"><ul>{result}</ul></div>  
   
      }
  */
  
    render() {
        const { data } = this.state;

/*
        const result = data.map((entry, index) => {
            console.log(entry);
            return <li key={index}>{entry}</li>;
        });
*/
        return <div className="container">
         
        {data.map(data =>
        <div>
        <ul>
        {data.hospital_name}          
        </ul>
        </div>)}
        </div>    
      }
      
      /*
        render() {
        const { data } = this.state;


        return (
            <>
         <div className="container">{
            data.map((entry, index) => {
       //     console.log(entry);
            return (            
      
                <div key={index}>
              {data.hospital_name +
                " , " +
                data.hospital_speciality +
                " ," +
                data.hospital_id +
                ", " +
                data.hospital_address}
            </div>
            );
        })};
        </div>
        </> 
        );   
      };
       
         */
   
}

export default App;
