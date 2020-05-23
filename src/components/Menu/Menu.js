import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { graphql, useStaticQuery } from "gatsby";
import TagList from "../TagList";
import SubscribeComp from '../SubscribeComp';

const getTags = graphql`
{
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
            node {
            frontmatter {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
                author
                tags
                image {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
            }
            excerpt
            }
        }
    }
}
`
const Menu = ({ open }) => {
    const response = useStaticQuery(getTags);
    const tags = response.allMdx.edges;
    return (
        <StyledMenu open={open}>
            <TagList tags={tags} />
            <SubscribeComp />
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;