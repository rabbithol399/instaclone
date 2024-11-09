const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21 
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feed = document.getElementById("feed")

let postUsernameEl = document.querySelector(".postUsername")
let avatarEl = document.querySelector(".avatar")
let postLocationEl = document.querySelector(".postLocation")
let mainPostEl = document.querySelector(".mainPost")

posts.forEach(post => {
    const postHTML = 
        `<section class='post'>
            <div class="postHeader">
                <img class="avatar" src=${post.avatar}>
                <div class="infoBlock">
                    <p class="postUsername">${post.name}</p>
                    <p class="postLocation">${post.location}</p>
                </div>
            </div>
                <img class="mainPost" src=${post.post}>
            <div class="interactBox">
                <img class="icon-heart" src="/images/icon-heart.png">
                <img class="icon-comment" src="/images/icon-comment.png">
                <img class="icon-dm" src="/images/icon-dm.png">
            </div>
            <div class="likesBox">
                <p class="likesPara">${post.likes} likes</p>
            </div>
            <div class="captionBox">
                <p class="caption"><strong>${post.username}</strong> ${post.comment} Mushrooms</p>
            </div>
        </section>`
    feed.insertAdjacentHTML("beforeend", postHTML)
    })
    
const heartIcons = document.querySelectorAll(".icon-heart")
heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener("click", function () {
    heartIcon.classList.toggle("liked")
    heartIcon.classList.toggle("glow")
})
})