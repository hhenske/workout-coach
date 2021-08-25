import React from 'react';
import styled from 'styled.componnts';

const GridWrapper = styled.div`
    display: grid;
    grid-gap: 10 px;
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(25px, auto);
    `;
    export const Home = (props) => (
        <GridWrapper>
            <p> This is a paragraph and I am writing o the home page</p>
            <p>This is another paragraph, hi he hello whatsup yo</p>
        </GridWrapper>
    )
