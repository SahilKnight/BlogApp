// interface BlogProps {
//     title: string;
//     content: string;
//     status: 'posted' | 'awaiting approval' | 'listed';
//   }
  
//   export default function BlogCard({ title, content, status }: BlogProps) {
//     return (
//       <div className="border p-4 rounded shadow">
//         <h2 className="text-xl font-bold">{title}</h2>
//         <p className="text-gray-700">{content}</p>
//         <span
//           className={`text-sm ${
//             status === 'posted'
//               ? 'text-blue-500'
//               : status === 'awaiting approval'
//               ? 'text-yellow-500'
//               : 'text-green-500'
//           }`}
//         >
//           {status}
//         </span>
//       </div>
//     );
//   }
  
const BlogCard = ({ title, content, status }: { title: string; content: string; status: string }) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{content}</p>
      <span className={`text-sm font-medium ${status === 'listed' ? 'text-green-600' : 'text-yellow-600'}`}>
        {status}
      </span>
    </div>
  );
};

export default BlogCard;
