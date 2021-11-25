import React from 'react';
import { ErrorContainer } from '../styled-components/ErrorStyle';
import { ProjectLink } from '../styled-components/ProjectStyle';

export default function Error () {
    return (
        <ErrorContainer>
            404 Page Not Found
            <ProjectLink to = '/'>To the Home Page...</ProjectLink>
        </ErrorContainer>
    )
}