import React from 'react';
import PropTypes from 'prop-types';

export default function MetricView(props) {

//  var metrics = [{aggressive: 5, dead: 6, inside: 30000}];

  //console.log(props.speaker_metrics);
  //
  /*var updateInput = function(event){
    this.setState({name_input : event.target.value});
  };
  updateInput = updateInput.bind(this);*/

  const result = Object.keys(props.speaker_metrics).map((speaker_id, index) =>
    (<div className="row">
        <div className="base--button" style={{
          minHeight: '75px', borderColor: (props.speaker_metrics[speaker_id].aggressive >= 3) ? 'red' : 'purple',
        }}>

          {console.log(props.speaker_metrics[speaker_id].timeSinceSpoken)}

          <div>
            {props.speaker_metrics[speaker_id].timeSinceSpoken >= 20 ? "User hasn't spoken recently" : ""}
          </div>

          <span>Speaker: {speaker_id}</span>

         {/* <input value={"Speaker: " + speake_id} style={{ minHeight: '75px', textAlign: 'center', border: 'none' ,outline: 'none'
}} onKeyPress={
            (e) => {
                //this.updateInput(e);
                if (e.key === 'Enter') {
                    console.log();
                    props.onSpeakerNameChange(speaker_id, "placeholder"};
                }
            }
          }/>*/}

          {/*     Speaker: {speaker_id}{" "}{Object.keys(props.speaker_metrics[speaker_id]).map((metric_name, i) =>
//   (<span>{metric_name}{"-"}{props.speaker_metrics[speaker_id][metric_name]}{" "}</span>)
// )}
*/}

      </div>
    </div>));

  return <div style={{flexDirection: 'column', padding: '50px'}}>{result}</div>
}




MetricView.propTypes = {
  speaker_metrics: PropTypes.object.isRequired, // eslint-disable-line
  onSpeakerNameChange: PropTypes.func.isRequired,
};
