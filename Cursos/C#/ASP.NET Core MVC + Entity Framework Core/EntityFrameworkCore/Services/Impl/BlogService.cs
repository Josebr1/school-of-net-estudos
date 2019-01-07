using EntityFrameworkCore.Data;
using EntityFrameworkCore.Models.ManageBlog;
using EntityFrameworkCore.Services.Spec;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Services.Impl
{
    public class BlogService : IBlogService
    {
        Microsoft.EntityFrameworkCore.DbContextOptions<ApplicationDbContext> options = new Microsoft.EntityFrameworkCore.DbContextOptions<ApplicationDbContext>();

        public void Salvar(Blog blog)
        {
            using (var db = new ApplicationDbContext(options))
            {
                if(blog.ID > 0)
                {
                    db.Blog.Attach(blog);
                    db.Entry(blog).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                } else
                {
                    db.Blog.Add(blog);
                    db.SaveChanges();
                }
            }
        }

        public Blog Obter(int id)
        {
            using (var db = new ApplicationDbContext(options))
            {
                return db.Blog.Where(b => b.ID == id).FirstOrDefault();
            }
        }

        public IEnumerable<Blog> Listar()
        {
                using (var db = new ApplicationDbContext(options))
                {
                    return db.Blog.ToList();
                }
        }

        public void Deletar(int id)
        {
            using (var db = new ApplicationDbContext(options))
            {
                var blog = new Blog { ID = id };
                db.Blog.Attach(blog);
                db.Blog.Remove(blog);
                db.SaveChanges();
            }
        }
    }
}
