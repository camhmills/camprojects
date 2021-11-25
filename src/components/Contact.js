import React from 'react'
import { ContactContainer, ContactH1 } from '../styled-components/ContactStyle'
import { ProjectAnchor } from '../styled-components/ProjectStyle'

export default function Contact() {
    return (
        <ContactContainer>
            <ContactH1>
                Working on the email portion! Setting up the back-end to handle it. Until then, send an email to: camhmills@gmail.com
                Or you can check out my Github Profile: <ProjectAnchor href = 'https://github.com/camhmills'>Github</ProjectAnchor>
                Or my LinkedIn Profile: <ProjectAnchor href = 'https://www.linkedin.com/in/cameron-mills-741402119/'>LinkedIn</ProjectAnchor>
            </ContactH1>
        </ContactContainer>
    )
}
