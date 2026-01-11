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
    let html = this.buildHeaderPost(post.author, post.timestamp);

    if (post.contentType === "text") {
      html += this.buildContentPostText(post.content);
    } else if (post.contentType === "image") {
      html += this.buildContentPostImage(post.content);
    } else if (post.contentType === "video") {
      html += this.buildContentPostVideo(post.content);
    }

    html += `</div>`;
    return html;
  }

  private buildHeaderPost(author: string, timestamp: Date): string {
    let html = `<div class="post">`;
    html += `<div class="author">${author}</div>`;
    html += `<div class="timestamp">${timestamp.toISOString()}</div>`;

    return html;
  }

  private buildContentPostText(content: string): string {
    let html = `<img src="${content}" alt="Post image" />`;
    html += `<div class="actions">
                 <button>Like</button>
                 <button>Comment</button>
                 <button>Share</button>
               </div>`;
    return html;
  }

  private buildContentPostImage(content: string): string {
    let html = `<div class="text-content">${content}</div>`;
    html += `<div class="actions">
                 <button>Like</button>
                 <button>Comment</button>
                 <button>Share</button>
                 <button>Download</button>
               </div>`;
    return html;
  }

  private buildContentPostVideo(content: string): string {
    let html = `<video src="${content}" controls></video>`;
    html += `<div class="video-info">Duration: auto</div>`;
    html += `<div class="actions">
                 <button>Like</button>
                 <button>Comment</button>
                 <button>Share</button>
                 <button>Download</button>
                 <button>Watch Later</button>
               </div>`;
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

  getAll(): Post[] {
    return this.posts;
  }
}

// Uso
const repo = new InMemoryRepository();
const feedItemBuilder = new FeedItemHtmlBuilder();
const feedBuilder = new FeedBuilder(feedItemBuilder);

const feedHtml = feedBuilder.build(repo.getAll());
console.log(feedHtml);
