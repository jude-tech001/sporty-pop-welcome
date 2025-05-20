
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

// Mock withdrawal history data - in a real app this would come from a backend
const mockWithdrawals = [
  { id: 1, amount: "3000", date: "2025-05-19 09:45" },
  { id: 2, amount: "7500", date: "2025-05-18 16:22" },
  { id: 3, amount: "12000", date: "2025-05-17 11:38" },
  { id: 4, amount: "5000", date: "2025-05-16 14:05" },
  { id: 5, amount: "8500", date: "2025-05-15 17:52" },
];

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
        <h2 className="text-lg font-semibold mb-2 text-center">Recent Withdrawals</h2>
        
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>A list of recent successful withdrawals</TableCaption>
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
      </div>
    </div>
  );
};

export default BalanceHistory;
