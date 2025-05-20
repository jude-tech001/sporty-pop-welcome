
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

// Mock transaction history data - in a real app this would come from a backend
const mockTransactions = [
  { id: 1, phoneNumber: "0801234567", amount: "5000", date: "2025-05-18 14:32" },
  { id: 2, phoneNumber: "0809876543", amount: "10000", date: "2025-05-18 12:15" },
  { id: 3, phoneNumber: "0702345678", amount: "7500", date: "2025-05-17 16:45" },
  { id: 4, phoneNumber: "0812345678", amount: "3000", date: "2025-05-17 09:22" },
  { id: 5, phoneNumber: "0903456789", amount: "12000", date: "2025-05-16 18:05" },
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
        <h1 className="text-xl font-bold text-red-600">Balance History</h1>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-2 text-center">Recent Add Balance Transactions</h2>
        
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>A list of recent add balance transactions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-red-600">Phone Number</TableHead>
                <TableHead className="text-red-600">Amount (₦)</TableHead>
                <TableHead className="text-red-600">Date & Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.phoneNumber}</TableCell>
                  <TableCell>₦{formatAmount(transaction.amount)}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
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
