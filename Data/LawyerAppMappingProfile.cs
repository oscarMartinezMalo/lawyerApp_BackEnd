using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.ViewModels;

namespace LawyerApp.Data
{
    public class LawyerAppMappingProfile : Profile
    {
        public LawyerAppMappingProfile()
        {
            CreateMap<Case, CaseViewModel>().ReverseMap();

            CreateMap<Client, ClientViewModel>().ReverseMap();

        }
    }
}
