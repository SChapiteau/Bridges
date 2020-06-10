import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Add, Person, ExpandMore } from '@material-ui/icons';

const styles = {
    root: {
      width: '100%',
    },    
  };

export class Menu extends Component {
        
    constructor(props) {
        super(props);
    }

    render() {                
        return (            
            <div className={styles.root}>
                <ExpansionPanel expanded={true}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel-annuaire">
                        <Typography> Annuaire</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {/* <Button variant="contained" onClick={() => this.props.setPage(1)}>Menu 1</Button> */}
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button onClick={() => this.props.setPage(1)}>
                                <ListItemIcon>
                                    <Add/>
                                </ListItemIcon>
                                <ListItemText primary="Ajouter" />                                
                            </ListItem>

                            <ListItem button onClick={() => this.props.setPage(2)}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary="Consulter" />
                            </ListItem>
                        </List>  
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <List component="nav" aria-label="main mailbox folders">                    
                    <ListItem button onClick={() => this.props.setPage(3)}>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Compte" />
                    </ListItem>
                </List>  
            </div>     
                    
        );
    }    
}

export default Menu;