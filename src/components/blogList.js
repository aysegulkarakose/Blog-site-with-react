import BlogCard from "./blogCard";

function BlogList({ blogData }) {
    return (
        <div>
            {Array.isArray(blogData) && blogData.map((post) =>
            (
                <BlogCard
                    key={post.id}
                    baslik={post.baslik}
                    yazar={post.yazar}
                    ozet={post.ozet}
                    detay={post.detay} />
            ))
            }
        </div>
    );
}
export default BlogList;