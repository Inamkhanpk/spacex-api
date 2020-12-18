import * as React  from 'react'
import { LaunchListQuery  } from './../../generated/graphql'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        overflow: 'hidden auto',
        backgroundColor: '#ececec',
        width: '300px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    rootlist :{
        listStyle: 'none',
        margin: '0',
        padding: '0'
      },
      
      rootitem :{
        paddingTop: '20px',
        paddingBottom: '20px',
        borderTop: '1px solid #919191',
        cursor: 'pointer'
      }
      
  }));
export interface OwnProps {
    handleIdChange: (newId: number) => void;
  }

interface  Props extends OwnProps{
    data: LaunchListQuery 
}
const Launch: React.FC<Props> = ({ data , handleIdChange }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>Missions</h3>
            <ul className={classes.rootlist}>
                {!!data.launches && data.launches.map((launchObj, ind) => {
                    return !!launchObj && <li key={ind} className={classes.rootitem} onClick={() => handleIdChange(launchObj.flight_number!)}>
                        {launchObj.mission_name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Launch