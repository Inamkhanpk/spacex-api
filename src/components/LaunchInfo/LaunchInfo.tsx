import * as React  from 'react';
import { LaunchProfileQuery  } from './../../generated/graphql'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      maxHeight: '100%',
      width: 'calc(100vw - 300px)',
      overflow: 'hidden auto',
      paddingLeft: '20px',
      paddingRight: '20px'
    },
   rootstatus :{
      marginTop: '40px',
    },
    roottitle :{
      marginTop:'0',
      marginBottom: '4px',
    },
    rootsuccess :{
      color: '#2cb84b'
    },
    rootfailed : {
      color: "#ff695e",
    },
    
    rootimagelist : {
      display:"grid",
      gridGap: '20px',
      gridTemplateColumns: 'repeat(2, 1fr)',
      marginTop: '40px',
      paddingBottom: '100px',
    },
    
      rootimage :{
      width: '100%',
    }
    
  }));

interface Props {
    data: LaunchProfileQuery 
}

//const className = 'LaunchProfile';

const MissionInfo: React.FC<Props> = ({ data }) => {
    console.log(data)
    const classes = useStyles();

    if (!data.launch) {
        return <div>No launch available</div>;
      }
    return (
        // <div className={classes.root}>
        //     <h3>Mission Details</h3>
        //     {data};
        // </div>
       
<div className={classes.root}>
<div className={classes.rootstatus}>
  <span>Flight {data.launch.flight_number}: </span>
  {data.launch.launch_success ? (
    <span className={classes.rootsuccess}>Success</span>
  ) : (
    <span className={classes.rootfailed}>Failed</span>
  )}
</div>
<h1 className={classes.roottitle}>
  {data.launch.mission_name}
  {data.launch.rocket &&
    ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
</h1>
<p >{data.launch.details}</p>
{!!data.launch.links && !!data.launch.links.flickr_images && (
  <div className={classes.rootimagelist}>
    {data.launch.links.flickr_images.map(image =>
      image ? <img src={image} alt="launchinfo" className={classes.rootimage} key={image} /> : null,
    )}
  </div>
)}
</div>
    )
}

export default MissionInfo