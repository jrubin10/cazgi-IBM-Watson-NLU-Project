import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          {/*JSON.stringify(this.props.emotions)*/}
          <table className="table table-bordered">
            <tbody>
            {
            /*JR Note: Need to update this section with the map table*/
            JSON.stringify(this.props.emotions)
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
