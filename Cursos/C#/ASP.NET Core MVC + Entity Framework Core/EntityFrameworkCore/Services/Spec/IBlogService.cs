using EntityFrameworkCore.Models.ManageBlog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Services.Spec
{
    public interface IBlogService
    {
        void Salvar(Blog blog);
        Blog Obter(int id);
        IEnumerable<Blog> Listar();
        void Deletar(int id);
    }
}
