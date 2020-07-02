const _ = require('lodash');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const {
        data: {
            allMdx: { edges: posts },
        },
    } = await graphql(`
        {
            allMdx {
            edges {
                node {
                    frontmatter {
                        slug
                        tags
                        series
                    }
                }
            }
            }
        }
    `)
    posts.forEach(({ node }) => {
        const { slug } = node.frontmatter
        createPage({
            path: slug,
            component: require.resolve("./src/templates/post-template.js"),
            context: {
                slug: slug,
            },
        })
    })

    let tmpArr = [];

    posts.forEach(({ node }) => {
        const { tags } = node.frontmatter;
        tmpArr = [...tmpArr, ...tags];
    })
    tmpArr = [...new Set(tmpArr)];

    tmpArr.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: require.resolve("./src/templates/tags-template.js"),
            context: {
                tag,
            },
        })
    })

    let seriesArr = [];

    posts.forEach(({ node }) => {
        const { series } = node.frontmatter;
        if(series)
            seriesArr = [...seriesArr, series];
    })
    seriesArr = [...new Set(seriesArr)];

    seriesArr.forEach(series => {
        createPage({
            path: `/series/${series}/`,
            component: require.resolve("./src/templates/series-template.js"),
            context: {
                series,
            },
        })
    })
}
