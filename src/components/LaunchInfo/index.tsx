import * as React from 'react';
import { useLaunchProfileQuery } from './../../generated/graphql'
import LaunchInfo from './LaunchInfo';

interface OwnProps {
    id: number;
  }

const MissionInfoContainer = ({ id }: OwnProps) => {

    const { data, loading, error } = useLaunchProfileQuery({
        variables: { id: String(id) },
    });

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    console.log(data);

    return (
        <LaunchInfo data={data} />
    )
}

export default MissionInfoContainer