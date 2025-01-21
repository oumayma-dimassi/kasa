export default function Tags({ items }) {
    return (
        <>
            {items.map((tagItem) => (<button key={tagItem} className="tag texttag"> {tagItem} </button>))}
        </>
    );
}

