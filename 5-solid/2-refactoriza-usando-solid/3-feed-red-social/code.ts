type Post = {
  id: string;
  author: string;
  timestamp: Date;
  contentType: "text" | "image" | "video";
  content: string;
};

export interface FeedItemBuilder {
  buildFeedItem(post: Post): string;
}

export class FeedItemHtmlBuilder implements FeedItemBuilder {
  buildFeedItem(post: Post): string {
    let html = `<div class="post">`;
    html += `<div class="author">${post.author}</div>`;
    html += `<div class="timestamp">${post.timestamp.toISOString()}</div>`;

    if (post.contentType === "text") {
      html += `<div class="text-content">${post.content}</div>`;
      html += `<div class="actions">
                 <button>Like</button>
                 <button>Comment</button>
                 <button>Share</button>
               </div>`;
    } else if (post.contentType === "image") {
      html += `<img src="${post.content}" alt="Post image" />`;
      html += `<div class="actions">
                 <button>Like</button>
                 <button>Comment</button>
                 <button>Share</button>
                 <button>Download</button>
               </div>`;
    } else if (post.contentType === "video") {
      html += `<video src="${post.content}" controls></video>`;
      html += `<div class="video-info">Duration: auto</div>`;
      html += `<div class="actions">
                 <button>Like</button>
                 <button>Comment</button>
                 <button>Share</button>
                 <button>Download</button>
                 <button>Watch Later</button>
               </div>`;
    }

    html += `</div>`;
    return html;
  }
}

export class FeedBuilder {
  constructor(private readonly feedItemBuilder: FeedItemBuilder) {}

  build(posts: Post[]): string {
    return posts
      .map((post) => this.feedItemBuilder.buildFeedItem(post))
      .join("");
  }
}

export class InMemoryRepository {
  private posts: Post[] = [
    {
      id: "1",
      author: "Alice",
      timestamp: new Date(),
      contentType: "text",
      content: "Hello world!",
    },
    {
      id: "2",
      author: "Bob",
      timestamp: new Date(),
      contentType: "image",
      content: "https://example.com/image.jpg",
    },
    {
      id: "3",
      author: "Charlie",
      timestamp: new Date(),
      contentType: "video",
      content: "https://example.com/video.mp4",
    },
  ];

  getAll(): Post[]{
    return this.posts;
  }
}

// Uso
const repo = new InMemoryRepository();
const feedItemBuilder = new FeedItemHtmlBuilder();
const feedBuilder = new FeedBuilder(feedItemBuilder);

const feedHtml = feedBuilder.build(repo.getAll());
console.log(feedHtml);
