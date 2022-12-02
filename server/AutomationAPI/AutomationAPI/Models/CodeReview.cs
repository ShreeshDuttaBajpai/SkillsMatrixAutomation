namespace AutomationAPI.Models
{
    public class CodeReview
    {
        public string Ticket_no { get; set; }
        public string Name { get; set; }
        public string? Code_reviewer_name { get; set; }
        public string? Code_deviation_count { get; set; }
        public string? Bugs_count { get; set; }
        public string? Remarks { get; set; }
    }
}
