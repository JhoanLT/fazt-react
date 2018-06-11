import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {CardActions,
        CardContent,
        Typography,
        Button,
        Card,
        Chip} from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
        padding: 50,
    },
    card: {
        minWidth: 275,
        margin: 20
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    chip: {
        background: "orange",
        color: "white "
    }
};

class Cards extends Component{

    constructor(props){
        super(props);
    }

    handleRemove(index){
        this.props.removeTask(index);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root} >
                <Grid container spacing={24} alignItems="flex-start"
                      direction="row"
                      justify="flex-end">
                    {this.props.data.map((todo, i) => {
                        return (
                            <div key={i}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Chip label={todo.priority} className={classes.chip}/>
                                        <Typography variant="headline" component="h2">
                                            {todo.title}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            {todo.responsible}
                                        </Typography>
                                        <Typography component="p">
                                            {todo.description}<br />
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" color="primary" size="small">START</Button>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            size="small"
                                            onClick={this.handleRemove.bind(this, i)}>DELETE</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles) (Cards);