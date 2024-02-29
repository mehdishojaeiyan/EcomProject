import "./blog.css"

const Blog = () => {
    return ( <>
<h1 className="p-5">Blog</h1>
     <div className="blogBigBox p-5">
        <div className="blog p-5">
            <p className="h2"><a style={{color:"#f99417",fontWeight:"bolder"}} href="#">Role of Exchange Traded Funds in Index Trading</a></p>
            <p>06 Dec 2023</p>
            <p style={{textAlign:"justify"}}>Hey reader! We sense you’re curious about the role of exchange traded funds in index trading. We get it – finance can be a maze sometimes. But hang tight; this article is designed just for you. We’re breaking down the essentials so you can walk away informed and confident. Dive in and let’s get those […]</p>
            <p><a href="#">Read More</a></p>
        </div>

        <div className="blog p-5">
            <p className="h2"><a style={{color:"#f99417",fontWeight:"bolder"}} href="#">Algorithmic Trading in Indices: Making Sense of Modern-Day Trading</a></p>
            <p>30 Nov 2023</p>
            <p style={{textAlign:"justify"}}>The world of finance and trading can sometimes feel like a maze with its jargons and rapid movements. But you’re here because you’ve heard of “Algorithmic Trading in Indices” and want to know the buzz. Rest assured, you’ve come to the right place. Our aim? To break it down for you, answer the burning questions […]</p>
            <p><a href="#">Read More</a></p>
        </div>

        <div className="blog p-5">
            <p className="h2"><a style={{color:"#f99417",fontWeight:"bolder"}} href="#">Concept of Index Trading: Unraveling the Mystery</a></p>
            <p>30 Nov 2023</p>
            <p style={{textAlign:"justify"}}>Hey there, dear readers! We’ve been tuning into your curiosity and guess what? We understand that you’ve been eager to grasp the ins and outs of the “Index Trading Concept”. It might seem like a puzzle now, but don’t you worry! We’re here to simplify things, answer your burning questions, and guide you step-by-step. Trust […]</p>
            <p><a href="#">Read More</a></p>
        </div>

        <div className="blog p-5">
            <p className="h2"><a style={{color:"#f99417",fontWeight:"bolder"}} href="#">The ABCs of Index Trading</a></p>
            <p>29 Nov 2023</p>
            <p style={{textAlign:"justify"}}>Hey there, savvy investors and financial explorers! We know you’ve got some burning questions about index trading, and let’s face it—who wouldn’t? It’s an exciting field with lots of opportunities. Rest assured, you’re in the right place to get all the deets. From what an index is, to why you might want to start trading […]</p>
            <p><a href="#">Read More</a></p>
        </div>
     </div>
    </> );
}
 
export default Blog;