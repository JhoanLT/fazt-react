import React, {Component} from 'react';
import {AppBar,
    Tab,
    Tabs,
    Badge} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {todos} from '../../todos';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Navigation extends Component{

    constructor(){
        super();
        this.state = {
            todos
        }
    }
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <AppBar position="static" className={classes.margin}>
                    <Tabs value={0}>
                        <Tab
                            label={
                                <Badge className={classes.padding} color="secondary" badgeContent={this.state.todos.length}>
                                    TAREAS
                                </Badge>
                            }
                        />
                        <Tab label="PENDIENTES" />
                        <Tab label="FINALIZADAS" />
                    </Tabs>
                </AppBar>
            </div>
        );
    }

}

export default withStyles(styles) (Navigation);