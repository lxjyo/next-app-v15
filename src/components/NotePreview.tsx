import { marked } from "marked"; // markdown 转为 html
import sanitizeHtml from "sanitize-html"; // 清理html，防止xss攻击 删除一些不良的写法，专业特殊字符
const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  "img",
  "h1",
  "h2",
  "h3",
]);
const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ["alt", "src"],
  },
);
export default function NotePreview({ content }: { content: string }) {
  return <div className="note-preview overflow-auto h-full">
    <div
      className="text-with-markdown"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(marked(content || "", { async: false }), {
          allowedTags,
          allowedAttributes,
        }),
      }}
    />
  </div>;
}
