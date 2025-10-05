import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Mail, Phone, Calendar } from "lucide-react";
import type { ContactSubmission } from "@shared/schema";

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: submissions, isLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact"],
  });

  const filteredSubmissions = submissions?.filter((submission) => {
    const query = searchQuery.toLowerCase();
    return (
      submission.name.toLowerCase().includes(query) ||
      submission.email.toLowerCase().includes(query) ||
      submission.message.toLowerCase().includes(query) ||
      (submission.phone && submission.phone.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" data-testid="text-page-title">
            Admin Dashboard
          </h1>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-page-subtitle">
            View and manage contact form submissions
          </p>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="search"
                placeholder="Search by name, email, phone, or message..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="text-total-submissions">
                  {submissions?.length || 0}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">With Phone</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="text-with-phone">
                  {submissions?.filter(s => s.phone).length || 0}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent (24h)</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="text-recent-24h">
                  {submissions?.filter(s => {
                    const dayAgo = new Date();
                    dayAgo.setDate(dayAgo.getDate() - 1);
                    return new Date(s.createdAt) > dayAgo;
                  }).length || 0}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submissions Table */}
          <Card>
            <CardContent className="p-0">
              {isLoading ? (
                <div className="p-8 text-center text-muted-foreground" data-testid="text-loading">
                  Loading submissions...
                </div>
              ) : filteredSubmissions?.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground" data-testid="text-no-submissions">
                  No submissions found
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSubmissions?.map((submission) => (
                        <TableRow key={submission.id} data-testid={`row-submission-${submission.id}`}>
                          <TableCell className="font-medium" data-testid={`text-name-${submission.id}`}>
                            {submission.name}
                          </TableCell>
                          <TableCell data-testid={`text-email-${submission.id}`}>
                            <a 
                              href={`mailto:${submission.email}`}
                              className="text-primary hover:underline"
                            >
                              {submission.email}
                            </a>
                          </TableCell>
                          <TableCell data-testid={`text-phone-${submission.id}`}>
                            {submission.phone || "-"}
                          </TableCell>
                          <TableCell className="max-w-md truncate" data-testid={`text-message-${submission.id}`}>
                            {submission.message}
                          </TableCell>
                          <TableCell className="whitespace-nowrap" data-testid={`text-date-${submission.id}`}>
                            {new Date(submission.createdAt).toLocaleDateString()} {new Date(submission.createdAt).toLocaleTimeString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
