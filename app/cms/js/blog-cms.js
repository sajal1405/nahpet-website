const postList = document.getElementById("post-list");
const blogForm = document.getElementById("blog-form");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const postIdInput = document.getElementById("post-id");

let posts = [];

window.onload = () => {
  fetchPosts();
};

blogForm.onsubmit = e => {
  e.preventDefault();
  const id = postIdInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  if (id) {
    posts[id] = { title, content };
  } else {
    posts.push({ title, content });
  }
  savePosts();
  blogForm.reset();
  postIdInput.value = "";
};

function fetchPosts() {
  fetch("../data/posts.json")
    .then(res => res.json())
    .then(data => {
      posts = data;
      renderPosts();
    });
}

function renderPosts() {
  postList.innerHTML = "";
  if (posts.length === 0) {
    postList.innerHTML = "<li class='text-white/50'>No posts yet.</li>";
    return;
  }
  posts.forEach((post, i) => {
    postList.innerHTML += `
      <li class="bg-maroon p-3 rounded shadow flex justify-between items-center">
        <div><strong>${post.title}</strong><br><small>${post.content.slice(0, 40)}...</small></div>
        <div class="flex gap-2">
          <button onclick="editPost(${i})" class="text-gold hover:text-white">Edit</button>
          <button onclick="deletePost(${i})" class="text-red-400 hover:text-red-600">Delete</button>
        </div>
      </li>
    `;
  });
}

function editPost(index) {
  const post = posts[index];
  titleInput.value = post.title;
  contentInput.value = post.content;
  postIdInput.value = index;
}

function deletePost(index) {
  posts.splice(index, 1);
  savePosts();
}

function savePosts() {
  fetch("../data/posts.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(posts)
  }).then(() => fetchPosts());
}
