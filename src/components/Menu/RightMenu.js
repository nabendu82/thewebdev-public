import React from 'react';
import Advert from '../Advert';
import { StyledRightMenu } from './RightMenu.styled';
import { graphql, useStaticQuery } from "gatsby";
import SeriesList from '../SeriesList';

const getSeries = graphql`
{
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
            node {
                frontmatter {
                    series
                }
            }
        }
    }
}
`
const RightMenu = ({ open }) => {
    const response = useStaticQuery(getSeries);
    const series = response.allMdx.edges;
    return (
        <StyledRightMenu open={open}>
            <Advert />
            <SeriesList seriesList={series} />
        </StyledRightMenu>
    )
}

export default RightMenu;
