import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {TextField,
        Button,
        MenuItem,
        FormControl,
        InputLabel,
        Select} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 30
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        minWidth: "100%",
    },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: "100%",
    },
});

class TodoForm extends Component{

    state = {
        title: '',
        responsible: '',
        description: '',
        priority: 'low',

    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit(){
        const {title, responsible, description, priority} = this.state;
        console.log(title, responsible, description, priority);
    }

    render(){
        const { classes } = this.props;
        const {title, responsible, description, priority} = this.state;
        return(
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="title-input"
                        label="Title"
                        className={classes.textField}
                        type="text"
                        autoComplete="current-title"
                        margin="normal"
                        name={title}
                    />
                    <TextField
                        id="responsible-input"
                        label="Responsible"
                        className={classes.textField}
                        type="text"
                        autoComplete="current-responsible"
                        margin="normal"
                        name={responsible}
                    />
                    <TextField
                        id="description-input"
                        label="Description"
                        className={classes.textField}
                        type="text"
                        autoComplete="current-description"
                        margin="normal"
                        name={description}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-priority">Priority</InputLabel>
                        <Select
                            value={priority}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'priority',
                                id: 'select-priority',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>High</MenuItem>
                            <MenuItem value={20}>Medium</MenuItem>
                            <MenuItem value={30}>Low</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.handleSubmit}>
                        SAVE
                    </Button>
                </form>
        );
    }
}

export default withStyles(styles)(TodoForm);
