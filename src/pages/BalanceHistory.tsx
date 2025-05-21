
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Empty array for withdrawals - we'll show "No transactions made" message instead
const mockWithdrawals: { id: number; amount: string; date: string }[] = [];

const BalanceHistory = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { replace: true });
  };

  // Format the amount with commas for thousands and add decimal places
  const formatAmount = (amount: string) => {
    return new Intl.NumberFormat('en-NG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Number(amount));
  };

  return (
    <div className="min-h-screen bg-white p-4 pb-16">
      <div className="flex items-center mb-6">
        <ArrowLeft 
          className="w-6 h-6 text-red-600 mr-2 cursor-pointer" 
          onClick={handleBack}
        />
        <h1 className="text-xl font-bold text-red-600">Withdrawal History</h1>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        {mockWithdrawals.length > 0 ? (
          <>
            <h2 className="text-lg font-semibold mb-2 text-center">Recent Withdrawals</h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>A list of your withdrawals</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-red-600">Amount (₦)</TableHead>
                    <TableHead className="text-red-600">Date & Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockWithdrawals.map((withdrawal) => (
                    <TableRow key={withdrawal.id}>
                      <TableCell className="font-medium">₦{formatAmount(withdrawal.amount)}</TableCell>
                      <TableCell>{withdrawal.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <div className="mb-4">
              <Badge variant="outline" className="px-3 py-1 border-red-200 bg-red-50 text-red-600">
                No transactions
              </Badge>
            </div>
            <p className="text-gray-500">No withdrawal transactions made yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BalanceHistory;
