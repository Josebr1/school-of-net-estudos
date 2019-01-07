using System;
using System.Collections.Generic;

namespace EntityFrameworkCore.Models
{
    public partial class Blog
    {
        public Blog()
        {
            Post = new HashSet<Post>();
        }

        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Resumo { get; set; }
        public string Url { get; set; }
        public string Autor { get; set; }

        public ICollection<Post> Post { get; set; }
    }
}
