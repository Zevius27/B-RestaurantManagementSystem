import { Badge } from "../ui/Badge";
import { Card, CardContent } from "../ui/Card";

export function MenuItemCard({ item, onEdit, onDelete }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      {item.imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
          <Badge variant="success">${item.price.toFixed(2)}</Badge>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <Badge variant="primary" size="sm">{item.category}</Badge>
          <div className="flex gap-2">
            {onEdit && (
              <button
                onClick={() => onEdit(item)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Edit item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(item)}
                className="text-gray-500 hover:text-red-600"
                aria-label="Delete item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 