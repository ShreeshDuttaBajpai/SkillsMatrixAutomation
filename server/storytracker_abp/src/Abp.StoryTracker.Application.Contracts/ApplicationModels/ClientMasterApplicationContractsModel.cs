using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class ClientMasterApplicationContractsModel
    {
        public int Id { get; set; }
        public string ClientName { get; set; }
        public string ClientDescription { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
