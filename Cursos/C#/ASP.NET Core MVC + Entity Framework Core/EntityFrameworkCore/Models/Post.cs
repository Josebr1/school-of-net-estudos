using System;
using System.Collections.Generic;

namespace EntityFrameworkCore.Models
{
    public partial class Post
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Texto { get; set; }
        public int? BlogId { get; set; }

        public Blog Blog { get; set; }
    }
}
