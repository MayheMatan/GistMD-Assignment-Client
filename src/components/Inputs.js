import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'

const Form = props => {  
    switch(props.question) {
        case "age": {
            return (
                <>
                    <Typography variant="h5" gutterBottom>
                        Select Age
                    </Typography>
                    <TextField value={props.value} onChange={props.onChange} required type="number" id="outlined-basic1" label="Age" variant="outlined" />
                </>
            );
        }
        case "language": {
            return (
                <>
                    <Typography variant="h5" gutterBottom>
                        Type Language
                    </Typography>
                    <TextField value={props.value} onChange={props.onChange} required type="text" id="outlined-basic2" label="Language" variant="outlined" />
                </>
            );
        }
        case "operation": {
            return (
                <>
                    <Typography variant="h5" gutterBottom>
                        Type Operation
                    </Typography>
                    <TextField value={props.value} onChange={props.onChange} required type="text" id="outlined-basic3" label="Operation" variant="outlined" />
                </>
            );
        }
        case "gender": {
            return (
                <>
                    <Typography variant="h5" gutterBottom>
                        Select Gender
                    </Typography>
                    <RadioGroup aria-label="gender" name="gender1" value={props.value} onChange={props.onChange}>
                        <FormControlLabel value="female" control={<Radio />} label={<FontAwesomeIcon size="lg" icon={faFemale}/>} />
                        <FormControlLabel value="male" control={<Radio />} label={<FontAwesomeIcon size="lg" icon={faMale}/>} />
                    </RadioGroup>
                </>
            )
        }
        default: return;
    }
}

export default Form