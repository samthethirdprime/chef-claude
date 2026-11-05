import ReactMarkdown from 'react-markdown'

export default function Recipe({ show, recipe }) {
    return (
        show ?
            <section>
                <h2>Chef Claude Recommends:</h2>

                <article className="suggested-recipe-container">
                    <ReactMarkdown>{recipe}</ReactMarkdown>
                </article>
            </section>
            : null
    )
}
