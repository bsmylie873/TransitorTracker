namespace TransistorTracker.Server.DTOs.Software;

public class UpdateSoftwareCompatibilityDto
{
    public int SoftwareId { get; set; }
    public int? PartId { get; set; }
    public int? DeviceId { get; set; }
    public int SoftwareCompatibilityLevelId { get; set; }
}