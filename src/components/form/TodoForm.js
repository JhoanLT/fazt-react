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

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        title: '',
        responsible: '',
        description: '',
        priority: '',

    };

    handleChange(e){
        const {value, name} = e.target;
        this.setState({
           [name]: value
        });
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render(){
        const { classes } = this.props;
        const {title, responsible, description, priority} = this.state;
        return(
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="title-input"
                        label="Title"
                        className={classes.textField}
                        type="text"
                        autoComplete="current-title"
                        margin="normal"
                        name="title"
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="responsible-input"
                        label="Responsible"
                        className={classes.textField}
                        type="text"
                        autoComplete="current-responsible"
                        margin="normal"
                        name="responsible"
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="description-input"
                        label="Description"
                        className={classes.textField}
                        type="text"
                        autoComplete="current-description"
                        margin="normal"
                        name="description"
                        onChange={this.handleChange}
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
                            <MenuItem value="high">High</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="low">Low</MenuItem>
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
