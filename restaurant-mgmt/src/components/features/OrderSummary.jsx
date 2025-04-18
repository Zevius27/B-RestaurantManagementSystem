import { Badge } from "../ui/Badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";

export function OrderSummary({ order, className = "" }) {
  const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const getStatusBadge = (status) => {
    const statuses = {
      pending: <Badge variant="warning">Pending</Badge>,
      preparing: <Badge variant="primary">Preparing</Badge>,
      ready: <Badge variant="info">Ready</Badge>,
      served: <Badge variant="success">Served</Badge>,
      cancelled: <Badge variant="error">Cancelled</Badge>,
    };
    
    return statuses[status] || <Badge>{status}</Badge>;
  };
  
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Order #{order.id}</h3>
            <p className="text-sm text-gray-500">
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
          <div>{getStatusBadge(order.status)}</div>
        </div>
      </CardHeader>
      <CardContent className="px-0 py-0">
        <ul className="divide-y divide-gray-200">
          {order.items.map((item, index) => (
            <li key={index} className="flex justify-between py-3 px-4">
              <div>
                <p className="font-medium text-gray-800">
                  {item.quantity} x {item.name}
                </p>
                {item.options && item.options.length > 0 && (
                  <p className="text-sm text-gray-500">
                    {item.options.join(", ")}
                  </p>
                )}
              </div>
              <p className="font-medium text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="w-full space-y-1">
          <div className="flex justify-between text-sm">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-medium text-gray-900">${total.toFixed(2)}</p>
          </div>
          {order.tax > 0 && (
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Tax</p>
              <p className="font-medium text-gray-900">${order.tax.toFixed(2)}</p>
            </div>
          )}
          {order.tip > 0 && (
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Tip</p>
              <p className="font-medium text-gray-900">${order.tip.toFixed(2)}</p>
            </div>
          )}
          <div className="flex justify-between pt-2 text-base font-medium">
            <p className="text-gray-900">Total</p>
            <p className="text-primary">${(total + (order.tax || 0) + (order.tip || 0)).toFixed(2)}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
} 