const token = localStorage.getItem('token');

if (!token) {
    alert('Please login first');
    window.location.href = 'login.html';
}

const blogPostForm = document.getElementById('blogPostForm');
const blogPostsDiv = document.getElementById('blogPosts');

const fetchBlogPosts = async () => {
    try {
        const res = await axios.get('/blogPosts');
        blogPostsDiv.innerHTML = res.data.map(post => `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                    <button onclick="deletePost('${post._id}')" class="btn btn-danger">Delete</button>
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error(err);
    }
};

blogPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    try {
        await axios.post('/blogPosts', { title, content, author: 'user_id' });
        fetchBlogPosts();
    } catch (err) {
        console.error(err);
    }
});

const deletePost = async (id) => {
    try {
        await axios.delete(`/blogPosts/${id}`);
        fetchBlogPosts();
    } catch (err) {
        console.error(err);
    }
};

fetchBlogPosts();
