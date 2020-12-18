import * as React from 'react';
import { useLaunchListQuery } from './../../generated/graphql'
import Launch , { OwnProps } from './Launch';

const LaunchContainer = (props: OwnProps) => {

    const { data, error, loading } = useLaunchListQuery();

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    console.log(data);

    return (
        <Launch data={data} {...props} />
    )
}

export default LaunchContainer